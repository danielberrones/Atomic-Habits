// Atomic Habits - James Clear

const fourStepModel = {
    1: 'cue',
    2: 'craving',
    3: 'response',
    4: 'reward'
};

console.log('FourStepModel');
Object.entries(fourStepModel).forEach(([k,v]) => {
    console.log(`step #${k} - ${v}`);
});
