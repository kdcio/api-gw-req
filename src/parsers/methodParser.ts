const methodParser = (met: string): string => (met ? met.toUpperCase() : 'GET');
export default methodParser;
