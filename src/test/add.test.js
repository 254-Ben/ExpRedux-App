// const add = (a, b) => a + b;
// const generateGreeeting = (name) => {
//     return `Hi ${name}!`;
// };

// test("should generate greeting from name", () => {
//     const result = generateGreeeting('Ben Kisumu');
//     expect(result).toBe("Hi Ben Kisumu!");
// });

const generateGreeeting = (name = "Anonymous") => {
    return `Hi ${name}!`;
};

test("shoulg generate greeting for no name", () => {
    const result = generateGreeeting();
    expect(result).toBe('Hi Anonymous!')
})




// test("should add two numbers", () => {
//     const result = add(4,4);
//     expect (result).toBe(8)
// });