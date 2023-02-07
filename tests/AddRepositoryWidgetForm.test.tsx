import { render, screen } from "@testing-library/react";
import { mock } from "jest-mock-extended";
import { RepositoryWidgetRepository } from "../src/domain/RepositoryWidgetRepository";
import { AddRepositoryWidgetForm } from "../src/sections/dashboard/repositoryWidget/AddRepositoryWidgetForm";
import userEvent from "@testing-library/user-event";

describe("AddWidgetForm", () => {
	const mockrepository = mock<RepositoryWidgetRepository>();

	it("show widget form when add button is clicked", () => {
		render(<AddRepositoryWidgetForm repository={mockrepository} />);

		const button = screen.getByRole("button", {
			name: new RegExp("Añadir repositorio", "i"),
		});

		userEvent.click(button);

		const url = screen.getByLabelText(new RegExp("Url del repositorio", "i"));

		expect(url).toBeInTheDocument();
	});

	it("save new widget when form is submitted", () => {
		render(<AddRepositoryWidgetForm repository={mockrepository} />);

		const button = screen.getByRole("button", {
			name: new RegExp("Añadir repositorio", "i"),
		});

		userEvent.click(button);
	});
});
