import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
            <h2 className='text-center my-4 mx-2'>Here are some amazing blogs you should not miss.</h2>
            <div className='w-75 m-auto'>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>What is the purpose of React Router?</Accordion.Header>
                        <Accordion.Body>
                            React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications. React Router plays an important role to display multiple views in a single page application. Without React Router, it is not possible to display multiple views in React applications. Most of the social media websites like Facebook, Instagram uses React Router for rendering multiple views.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>How does Context API works?</Accordion.Header>
                        <Accordion.Body>
                            The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. <br /> <br />

                            React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>What is useRef hook?</Accordion.Header>
                        <Accordion.Body>
                            "useRef" returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component. "useRef" is like a “box” that can hold a mutable value in its .current property. However, "useRef()" is useful for more than the ref attribute. It’s handy for keeping any mutable value around similar to how you’d use instance fields in classes.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default Blog;