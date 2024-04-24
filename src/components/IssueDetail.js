import React, { useState } from 'react';
import IssueMap from './IssueMap';

const IssueDetail = ({ issue, onSave, onDelete, onBack }) => {
    const [editedIssue, setEditedIssue] = useState(issue);

    const handleChange = (e) => {
        const newIssue = Object.assign({}, editedIssue);
        newIssue[e.target.name] = e.target.value;
        setEditedIssue(newIssue);
    };
    const date = new Date(issue.dateSubmitted);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = date.getFullYear();

    return (
        <div className="issue-detail-container">
            <h2>{issue.name}</h2>
            <p>Email: {issue.email}</p>
            <p>Date submitted: {`${day}/${month}/${year}`}</p>
            <p>Category: {issue.category}</p>
            <p>Description: {issue.description}</p>
            <IssueMap />
            <form>
                <label>
                    Notes:
                    <textarea
                        name="notes"
                        value={editedIssue.notes}
                        onChange={handleChange}
                        rows="4"
                        cols="50"
                    />
                </label>
                <label>
                    <input
                        type="radio"
                        name="status"
                        value="open"
                        checked={editedIssue.status === 'open'}
                        onChange={handleChange}
                    />
                    Open
                </label>
                <label>
                    <input
                        type="radio"
                        name="status"
                        value="closed"
                        checked={editedIssue.status === 'closed'}
                        onChange={handleChange}
                    />
                    Closed
                </label>
                <button type="button" onClick={() => onSave(editedIssue)}>Save</button>
                <button type="button" onClick={() => onDelete(editedIssue._id)}>Delete</button>
                <button type="button" onClick={() => onBack(null)}>Back</button>
            </form>
        </div>
    );
}

export default IssueDetail;
