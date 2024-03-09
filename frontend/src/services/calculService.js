export const calculerRTT = async (data) => {
    const apiUrl = process.env.REACT_APP_API_URL;
    console.log('====================================');
    console.log(apiUrl);
    console.log('====================================');
    const response = await fetch(`${apiUrl}/api/calculer-rtt`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return response.json();
};
