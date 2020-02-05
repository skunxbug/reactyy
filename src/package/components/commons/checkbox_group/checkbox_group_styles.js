export const styles = (theme) => {
    const { miscellaneous: { spacing } } = theme;
    return ({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            marginLeft: -spacing
        },
        checkboxField: {
            margin: spacing
        },
        checkbox: {
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer'
        }
    });
};
