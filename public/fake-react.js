const root = document.getElementById('root');

// intial
const Components = [
  { element: 'div', children: 'Box', props: { styles: { backgroundColor: 'cyan', width: '150px', height: '150px' } } },
];

const virtualDOM1 = document.createElement('div');
virtualDOM1.id = 'virtualDOM_1';

Components.map((component, index) => {
  const element = document.createElement(component.element);
  element.id = `fake-react-internal-id-${index}`;
  Components[0].key = element.id;
  element.textContent = component.children;
  Object.keys(component.props.styles).map((style) => {
    element.style[style] = component.props.styles[style];
  });
  virtualDOM1.appendChild(element);
});

root.appendChild(virtualDOM1);

// update

const UpdatedComponents = [
  {
    ...Components[0],
    children: 'Updated Box',
  }
];

// just take the first element for simplicity

if (Components[0].children !== UpdatedComponents[0].children) {
  const [updatedComponenet] = UpdatedComponents;
  const updatedElement = document.getElementById(updatedComponenet.key);
  updatedElement.textContent = updatedComponenet.children;
}
