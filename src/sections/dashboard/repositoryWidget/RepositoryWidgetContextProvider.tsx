import React, { createContext, useContext, useEffect, useState } from "react";

import { config } from "../../../devdash_config";
import { RepositoryWidget } from "../../../domain/RepositoryWidget";
import { RepositoryWidgetRepository } from "../../../domain/RepositoryWidgetRepository";

const RepositoryWidgetContext = createContext<{ repositoryWidgets: RepositoryWidget[] }>({
	repositoryWidgets: [],
});

export function RepositoryWidgetContextProvider({
	children,
	repository,
}: {
	children: React.ReactElement;
	repository: RepositoryWidgetRepository;
}) {
	const [repositoryWidgets, setRepositoryWidgets] = useState<RepositoryWidget[]>([]);

	useEffect(() => {
		repository.search().then((repositoryWidgets) => {
			if (repositoryWidgets.length == 0) {
				config.widgets.map((widget) => ({ id: widget.id, repositoryUrl: widget.repository_url }));

				return;
			}

			setRepositoryWidgets(repositoryWidgets);
		});
	}, []);

	return (
		<RepositoryWidgetContext.Provider value={{ repositoryWidgets }}>
			{children}
		</RepositoryWidgetContext.Provider>
	);
}

export const useRepositoryWidgetContext = () => useContext(RepositoryWidgetContext);
