const setMockService = (string) => {
    if (string === 'true') {
        return true;
    } else if (string === 'false') {
        return false;
    }
    return true;
};

export default {
    setMockService: setMockService(import.meta.env.VITE_MOCKSERVICE),
};
