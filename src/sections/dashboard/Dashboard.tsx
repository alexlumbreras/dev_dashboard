import { useMemo } from "react";

import { config } from "../../devdash_config";
import { GitHubRepositoryRepository } from "../../domain/GitHubRepositoryRepository";
import styles from "./Dashboard.module.scss";
import { GitHubRepositoryWidget } from "./GitHubRepositoryWidget";
import { useGitHubRepository } from "./useGitHubRepository";
import { WidgetsSkeleton } from "./WidgetsSkeleton";

export function Dashboard({ repository }: { repository: GitHubRepositoryRepository }) {
	const gitHubRepositories = useMemo(() => {
		return config.widgets.map((widget) => widget.repository_url);
	}, []);

	const { repositoryData, isLoading } = useGitHubRepository(repository, gitHubRepositories);

	return (
		<>
			{!isLoading && repositoryData.length === 0 ? (
				<WidgetsSkeleton numberOfWidgets={gitHubRepositories.length} />
			) : (
				<section className={styles.container}>
					{repositoryData.map((repository) => (
						<GitHubRepositoryWidget
							key={`${repository.id.organization}/${repository.id.name}`}
							repository={repository}
						/>
					))}
				</section>
			)}
		</>
	);
}
