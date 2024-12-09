import React from 'react';
import Markdown from 'react-markdown';

const ClaudeRecipe = (props) => {
    return (
        <section className="p-4 bg-white shadow-md rounded-lg max-w-screen-lg mx-auto">
            <Markdown 
                components={{
                    h1: ({ children }) => <h1 className="text-3xl sm:text-4xl font-bold my-4">{children}</h1>,
                    h2: ({ children }) => <h2 className="text-2xl sm:text-3xl font-semibold my-3">{children}</h2>,
                    h3: ({ children }) => <h3 className="text-xl sm:text-2xl font-medium my-2">{children}</h3>,
                    p: ({ children }) => <p className="text-base sm:text-lg my-2">{children}</p>,
                    ul: ({ children }) => <ul className="list-disc ml-5 my-2">{children}</ul>,
                    ol: ({ children }) => <ol className="list-decimal ml-5 my-2">{children}</ol>,
                    li: ({ children }) => <li className="my-1">{children}</li>,
                    code: ({ children }) => <code className="bg-gray-200 text-red-500 p-1 rounded">{children}</code>,
                }}
            >
                {props.recipe}
            </Markdown>
        </section>
    );
};

export default ClaudeRecipe;
