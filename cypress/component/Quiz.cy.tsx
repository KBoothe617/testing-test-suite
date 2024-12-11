import React from 'react';
import Quiz from '../../client/src/components/Quiz';
import { mount } from 'cypress/react18';

describe("<Quiz />", () => {
    it("should render the Quiz component and interact with it", () => {
        mount(<Quiz />);

        // Ensure the Start Quiz button exists and click it
        cy.get('[data-cy="start-quiz"]').should("exist").click();

        // Verify that the first question is presented
        cy.get('[data-cy="quiz-question"]').should("exist").and("not.be.empty");

        // Ensure the Next Question button exists
        cy.get('[data-cy="next-question"]').should("exist");
    });
});