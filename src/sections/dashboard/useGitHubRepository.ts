import { useEffect, useState } from "react";

import { GitHubRepository } from "../../domain/GitHubRepository";
import { GitHubRepositoryRepository } from "../../domain/GitHubRepositoryRepository";

export function useGitHubRepository(
	repository: GitHubRepositoryRepository,
	repositoryUrls: string[]
): {
	repositoryData: GitHubRepository[];
	isLoading: boolean;
} {
	const [repositoryData, setRepositoryData] = useState<GitHubRepository[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		setIsLoading(true);
		repository
			.search(repositoryUrls)
			.then((repositoryData) => {
				setRepositoryData(repositoryData);
			})
			.catch((err) => alert(err));
		setIsLoading(false);
	}, [repository, repositoryUrls]);

	return { repositoryData, isLoading };
}
