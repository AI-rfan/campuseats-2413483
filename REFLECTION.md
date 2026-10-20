# Week 1 reflection

Answer each question in 1–3 sentences, in your own words.

1. What is the difference between building a UI imperatively (plain DOM code) and declaratively (React)?
Ans: Imperative UI development requires step-by-step instructions to manually manipulate the DOM whenever state changes. In contrast, declarative UI development allows you to describe what the interface should look like based on current data, leaving React to efficiently update the DOM under the hood.

2. Why must a component name start with a capital letter?
Ans:JSX uses naming conventions to distinguish standard HTML tags from custom components.If we use a lowercase letter, React gets confused and thinks it is just a standard HTML tag like a <div> or <button>.

3. What does a fragment <>...</> do, and why not just use a <div>?
Ans: A Fragment lets group multiple elements together without adding an extra <div> box to actual webpage. This keeps your code clean and prevents unnecessary extra boxes from breaking your CSS layout.

4. Name one benefit of splitting the UI into small components.
Ans: Small components work like reusable LEGO blocks, allowing us to create something once and use it all over your website. They also make finding and fixing bugs way easier since you only have to check one small piece of code at a time.
