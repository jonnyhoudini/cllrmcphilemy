import React, { useState } from 'react';

const IssueDetail = ({ issue, onSave, onDelete, onBack }) => {
    const [editedIssue, setEditedIssue] = useState(issue);

    const handleChange = (e) => {
        const newIssue = Object.assign({}, editedIssue);
        newIssue[e.target.name] = e.target.value;
        setEditedIssue(newIssue);
    };

    return (
        <div className="issue-detail-container">
            <h2>Issue Detail</h2>
            <p>Name: {issue.name}</p>
            <p>Address: {issue.address}</p>
            <p>Email: {issue.email}</p>
            <p>Date submitted: {issue.dateSubmitted}</p>
            <p>Category: {issue.category}</p>
            <p>Description: {issue.description}</p>
            <p>Location: {issue.location.lat ? issue.location.lat + ' ' + issue.location.lng : issue.location}</p>
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
