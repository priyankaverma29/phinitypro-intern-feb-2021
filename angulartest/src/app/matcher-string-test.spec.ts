describe  ('String Matcher Test',()=>{
    it('Testing String,"toBe" for matcher ===',()=>{
        let firstStr = 'Hello World!';
        expect(firstStr).toBe('Hello World!');
});

it('Testing String,"toEqual" for matcher ==',()=>{
    let firstStr = 'Hello World!';
    expect(firstStr).toEqual('Hello World!');
});    


it ('Testing String, "toContain" checks hello present in  string');
let firstStr = 'Hello World! welcome to Rudra';
expect(firstStr).toContain('Rudra')
});

it('Testing String, "toMatch" matcher is for regular expression');
var message = "This 4th lane of Underworld";
// Regular Expression to check String contains number
expect(message).toMatch(/\d+/);
expect(message).toMatch("Underworld");
  