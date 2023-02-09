import { RepositoryWidgetMother } from "../../RepositoryWidgetMother";

describe("Repository Widget Form", () => {
	it("Add new repository with id and url", () => {
		const newWidget = RepositoryWidgetMother.create({
			repositoryUrl: "https://github.com/CodelyTV/Devdash",
		});

		cy.visit("/");

		cy.findByRole("button", { name: new RegExp("Añadir repositorio", "i") }).click();

		cy.findByLabelText(new RegExp("Id", "i")).type(newWidget.id);
		cy.findByLabelText(new RegExp("Url del repositorio", "i")).type(newWidget.repositoryUrl);

		cy.findByRole("button", {
			name: new RegExp("Añadir", "i"),
		}).click();

		const widget = cy.findByText(new RegExp("CodelyTV/Devdash", "i"));

		widget.should("exist");
	});

	it("Add same repository and shows an error message", () => {
		const newWidget = RepositoryWidgetMother.create({
			repositoryUrl: "https://github.com/CodelyTV/Devdash",
		});

		cy.visit("/");

		cy.findByRole("button", { name: new RegExp("Añadir repositorio", "i") }).click();

		cy.findByLabelText(new RegExp("Id", "i")).type(newWidget.id);
		cy.findByLabelText(new RegExp("Url del repositorio", "i")).type(newWidget.repositoryUrl);

		cy.findByRole("button", {
			name: new RegExp("Añadir", "i"),
		}).click();

		const widget = cy.findByText(new RegExp("CodelyTV/Devdash", "i"));

		widget.should("exist");

		cy.visit("/");

		cy.findByRole("button", {
			name: new RegExp("Añadir repositorio", "i"),
		}).click();

		cy.findByLabelText(new RegExp("Id", "i")).type(newWidget.id);
		cy.findByLabelText(new RegExp("Url del repositorio", "i")).type(newWidget.repositoryUrl);

		cy.findByRole("button", {
			name: new RegExp("Añadir", "i"),
		}).click();

		const errorMessage = cy.findByText(new RegExp("Repositorio duplicado", "i"));

		errorMessage.should("exist");
	});
});
