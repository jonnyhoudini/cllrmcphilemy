import React, { useState } from 'react';
import IssueDetail from './IssueDetail';
import { editReport, deleteReport, getReports } from '../services/services';

const Dashboard = () => {

    const [sortConfig, setSortConfig] = useState({ key: 'dateSubmitted', direction: 'desc' });
    const [selectedIssue, setSelectedIssue] = useState(null);
    const [issues, setIssues] = useState([]);

    useEffect(() => {
        getReports().then((data) => {
            setIssues(data);
        });
    }, []);

    const sortedIssues = [...issues].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
    });

    const handleSort = (key) => {
        console.log('handleSort called');
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key: key, direction: direction });
    };


    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    const issuesList = sortedIssues.map((issue) => (
        <tr key={issue._id}>
            <td data-label="Status">{issue.status == "open" ? '🟢' : '🔴'}</td>
            <td data-label="Date Submitted">{formatDate(issue.dateSubmitted)}</td>
            <td data-label="Name">{issue.name}</td>
            <td data-label="Email">{issue.email}</td>
            <td data-label="Address">{issue.address}</td>
            <td data-label="Category">{issue.category}</td>
            <td data-label="Description">{issue.description}</td>
            <td data-label="Location">location</td>
            <td data-label="Edit"> <button onClick={() => setSelectedIssue(issue)}>Edit</button></td>
        </tr>
    ));

    const handleSave = (updatedIssue) => {
        // Save the updated issue to the database
        editReport(updatedIssue).then((data) => {
            // Then update the local state or refetch the issues
            //get the index of the updated issue in the issues list
            const updatedIssueIndex = issues.findIndex((issue) => issue._id === updatedIssue._id);
            //create a copy of the issues list
            const updatedIssues = [...issues];
            //update the issue in the copy of the issues list
            updatedIssues[updatedIssueIndex] = updatedIssue;
            //set the issues list to the copy of the issues list
            setIssues(updatedIssues);
            setSelectedIssue(null);
        });
    };

    const handleDelete = (issueId) => {
        // Delete the issue from the database
        deleteReport(issueId).then((data) => {
            // Then update the local state or refetch the issues
            //get the index of the deleted issue in the issues list
            const deletedIssueIndex = issues.findIndex((issue) => issue._id === issueId);
            //create a copy of the issues list
            const updatedIssues = [...issues];
            //remove the issue from the copy of the issues list
            updatedIssues.splice(deletedIssueIndex, 1);
            //set the issues list to the copy of the issues list
            setIssues(updatedIssues);
            setSelectedIssue(null);
        });
    };

    return (
        <div>
            {selectedIssue ? (
                <IssueDetail issue={selectedIssue} onSave={handleSave} onDelete={handleDelete} onBack={setSelectedIssue} />
            ) : (
                <>
                    <div id="dashboard-container">
                        <h2>Dashboard</h2>
                        <table border="1">
                            <thead>
                                <tr>
                                    <th>Status</th>
                                    <th className="sortableRow" onClick={() => handleSort('dateSubmitted')}>
                                        Date Submitted
                                        {sortConfig.key === 'dateSubmitted' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                                    </th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Address</th>
                                    <th className="sortableRow" onClick={() => handleSort('category')}>
                                        Category
                                        {sortConfig.key === 'category' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                                    </th>
                                    <th>Description</th>
                                    <th>Location</th>
                                    <th>Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {issuesList}
                            </tbody>
                        </table>
                    </div>
                </>
            )}

        </div>
    );
}

export default Dashboard;