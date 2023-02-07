import { render, screen } from "@testing-library/react";
import { mock } from "jest-mock-extended";
import { RepositoryWidgetRepository } from "../src/domain/RepositoryWidgetRepository";
import { AddRepositoryWidgetForm } from "../src/sections/dashboard/repositoryWidget/AddRepositoryWidgetForm";

describe("AddWidgetForm", () => {
	const mockrepository = mock<RepositoryWidgetRepository>();

	it("show widget form when add button is clicked", () => {
		render(<AddRepositoryWidgetForm repository={mockrepository} />);

		const button = screen.getByRole("button");
	});
});
