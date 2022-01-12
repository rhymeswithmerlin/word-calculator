

const LOW_COLOR = 'lightblue';
const CLOSE_COLOR = 'lightyellow';
const PERFECT_COLOR = 'lightgreen';
const HIGH_COLOR = 'indianred';
export const getColorFromValue = (value) => {
    if (value < 50) {
        return LOW_COLOR;
    } else if (value < 100) {
        return CLOSE_COLOR;
    } else if (value > 100) {
        return HIGH_COLOR;
    }
    else if (value = 100) {
        return PERFECT_COLOR
    }
}