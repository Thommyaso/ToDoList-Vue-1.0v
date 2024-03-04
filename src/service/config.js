
/*

    .env variables are always uploaded as strings, regardless of their intended data type.
    To ensure consistent behavior, I implemented a setMockService method to convert string value into a Boolean.

*/

const setMockService = (string) => {
    return string === 'true' ? true : string !== 'false';
};

export default {
    setMockService: setMockService(import.meta.env.VITE_MOCKSERVICE),
    baseApiServerUrl: import.meta.env.VITE_BASE_API_SERVER_URL ? import.meta.env.VITE_BASE_API_SERVER_URL : 'http://localhost:3000/task/',
};
