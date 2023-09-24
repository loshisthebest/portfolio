import MY_EXPERIENCES from './experiences.params';
import MY_PROJECTS from './projects.params';
import MY_SKILLS from './skills.params';
import {
	Platform,
	type HomePageParams,
	type ProjectPageParams,
	type ExperiencePageParams,
	type SkillsPageParams,
	type ResumePageParams,
	type SearchPageParams
} from './types';
import { Icons } from './utils';

export const TITLE_SUFFIX = 'Slick template with Svelte';

export const NavBar = {
	home: 'Home',
	personal: 'Projects',
	career: 'Experiences',
	resume: 'Resume',
	skills: 'Skills'
};

export const getPlatfromIcon = (platform: Platform): Icons => {
	switch (platform) {
		case Platform.GitHub:
			return Icons.GitHub;
		case Platform.Linkedin:
			return Icons.LinkedIn;
		case Platform.StackOverflow:
			return Icons.StackOverflow;
		case Platform.Facebook:
			return Icons.Facebook;
		case Platform.Email:
			return Icons.Email;
		case Platform.Twitter:
			return Icons.Twitter;
		case Platform.Youtube:
			return Icons.Youtube;
	}
};

export const HOME: HomePageParams = {
	title: 'Home',
	name: "Hey, I'm Lucas",
	lastName: 'Immerman',
	description:
		`Hello! I'm Lucas, a high school student with a fervent passion for technology, particularly specializing in Node.js development. When I am not immersed in coding and creating seamless, efficient back-end processes, you can find me traversing the snowy slopes, relishing the exhilarating rush skiing brings. My journey in development began at a young age, allowing me to refine my skills and develop applications that integrate seamlessly with various front-end technologies. School and learning hold paramount importance in my life, enabling me to blend academic insights with practical coding experience to develop innovative and impactful solutions.`,
	links: [
		{ platform: Platform.GitHub, link: 'https://github.com/loshisthebest' },
		
		{
			platform: Platform.Twitter,
			link: 'https://twitter.com/'
		},

		{
			platform: Platform.Email,
			link: 'lucasimmerman@gmail.com'
		}
	]
};

export const PROJECTS: ProjectPageParams = {
	title: 'Projects',
	items: MY_PROJECTS
};

export const EXPERIENCES: ExperiencePageParams = {
	title: 'Experiences',
	items: MY_EXPERIENCES
};

export const SKILLS: SkillsPageParams = {
	title: 'Skills',
	items: MY_SKILLS
};

export const RESUME: ResumePageParams = {
	title: 'Resumé',
	item: ''
};

export const SEARCH: SearchPageParams = {
	title: 'Search'
};
