const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from React"
);
console.log(heading); //this is object

const root = ReactDOM.createRoot(document.getElementById("root"));
//const root = ReactDOM.createRoot(document.body);

root.render(heading); //this render method is converting object "Heading" into a h1 Tag and putting it into browser's DOM

const object = React.createElement("h1", { id: "heading-2" }, [
  React.createElement("h1", { id: "child-1" }, "Child-1"),
  React.createElement("h1", { id: "child-1" }, "Child-2")
]);

const root2=ReactDOM.createRoot(document.getElementById("root"));
root2.render(object);
