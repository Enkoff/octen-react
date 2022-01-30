export const generateId = () => {
    const first = Math.random().toString(36).substr(2, 6);
    const second = Math.random().toString(36).substr(2, 4);
    const third = Math.random().toString(36).substr(2, 6);
    return `${first}-${second}-${third}`;
}