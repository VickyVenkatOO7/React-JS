// 1. Nested header elements using React.createElement
const nestedHeaderElement = React.createElement('div', { className: 'title' },
  React.createElement('h1', null, 'Heading 1'),
  React.createElement('h2', null, 'Heading 2'),
  React.createElement('h3', null, 'Heading 3')
);

// 2. Nested header elements using JSX
const nestedHeaderElementJSX = (
  <div className="title">
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
  </div>
);

// 3. Functional component with JSX and attributes
const TitleComponent = ({ titleText, subTitleText, subSubTitleText }) => (
  <div className="title">
    <h1>{titleText}</h1>
    <h2>{subTitleText}</h2>
    <h3>{subSubTitleText}</h3>
  </div>
);

// Example usage
const functionalComponentExample = (
  <TitleComponent
    titleText="Title Component"
    subTitleText="Subtitle"
    subSubTitleText="Sub-subtitle"
  />
);

// 4. Composition of Components in JSX

// a. Adding a component inside another (`TitleComponent`)
const InnerComponent = () => <p>Inner content</p>;

const OuterComponent = () => (
  <div className="title">
    <h1>Outer Component</h1>
    <InnerComponent />
  </div>
);

// Example usage
const compositionExample = <OuterComponent />;

// b. Using a self-closing tag (`<TitleComponent/2`)
const SelfClosingComponent = () => <p>Self-closing component</p>;

const TitleComponent2 = () => (
  <div className="title">
    <h1>Title Component 2</h1>
    <SelfClosingComponent />
  </div>
);

// Example usage
const compositionExample2 = <TitleComponent2 />;

// c. Using an explicit opening and closing tag (`<TitleComponent></TitleComponent>`)
const ExplicitComponent = () => <p>Explicit component</p>;

const TitleComponent3 = () => (
  <div className="title">
    <h1>Title Component 3</h1>
    <ExplicitComponent />
  </div>
);

// Example usage
const compositionExample3 = <TitleComponent3 />;
