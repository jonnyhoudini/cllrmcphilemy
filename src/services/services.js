const baseURL = 'https://parklife-delta.vercel.app/reports/';
// const baseURL = 'http://localhost:3000/reports/';
const geoCodingURL = 'https://geocode.maps.co/reverse?';

export const getAddress = (lat, lng) => {
    return fetch(`${geoCodingURL}lat=${lat}&lon=${lng}&api_key=65babfe176bc5615296862qsh669600`)
        .then(res => res.json())
}

export const getReports = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const postReport = (formData) => {
    console.log('payload', formData);
    return fetch(baseURL, {
        method: 'POST',
        //using json so need to add headers. Can be removed if we switch to form data
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
        .then(res => res.json())
}

export const deleteReport = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    });
};

export const editReport = (report) => {
    return fetch(baseURL + report._id, {
        method: 'PUT',
        body: JSON.stringify(report),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json());
}

export const postImage = (payload) => {
    console.log('payload', payload);
    console.log('JSON payload', JSON.stringify(payload));
    return fetch('http://localhost:5050/upload', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json())
}
