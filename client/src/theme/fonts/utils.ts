export const makeSrc = (fontName: string): (style: string, url: string) => string => {
    const secondFontName = fontName.replace(/ /g, '');
    return (style: string, url: string): string => {
        const secondStyle = style.replace(/ /g, '');
        return `local('${fontName} ${style}'), local('${secondFontName}-${secondStyle}'), url('${url}') format('truetype')`;
    };
};
