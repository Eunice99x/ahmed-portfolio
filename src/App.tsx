import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Download, Code, ExternalLink, CheckCircle } from "lucide-react";

// Data
const SECTIONS = ["home", "skills", "experience", "projects", "contact"] as const;
type Section = (typeof SECTIONS)[number];

const SKILLS = [
	{
		category: "Frontend",
		items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Redux Toolkit", "Tailwind CSS"],
	},
	{ category: "Backend", items: ["Golang", "Laravel", "Node.js", "MySQL"] },
	{ category: "Testing", items: ["Jest", "React Testing Library", "Cypress", "PHPUnit", "Go testing"] },
	{ category: "Other", items: ["Git", "CI/CD", "Agile methodologies", "RESTful APIs", "GraphQL"] },
];

const EXPERIENCES = [
	{
		title: "Senior Full Stack Developer",
		company: "TechCorp Solutions",
		period: "Jan 2020 - Present",
		description:
			"Lead developer for enterprise-level web applications. Architected scalable solutions using React, Next.js, and Golang. Implemented robust backend systems with Laravel and MySQL. Established comprehensive testing strategies using Jest, React Testing Library, and Cypress.",
	},
	{
		title: "Full Stack Engineer",
		company: "InnovateTech Inc.",
		period: "Mar 2017 - Dec 2019",
		description:
			"Developed and maintained multiple high-traffic web applications. Utilized React, Redux Toolkit, and Laravel to create efficient and responsive user interfaces backed by powerful APIs. Implemented automated testing suites using PHPUnit and Jest, significantly improving code quality and reducing bugs in production.",
	},
];

const PROJECTS = [
	{
		title: "E-Commerce Platform",
		description:
			"A scalable e-commerce solution built with Next.js, Redux Toolkit, and Golang microservices. Implemented comprehensive unit and integration tests.",
		techStack: ["Next.js", "Redux Toolkit", "Golang", "MySQL", "Jest", "Cypress"],
	},
	{
		title: "Content Management System",
		description:
			"A robust CMS for large organizations, featuring real-time collaboration and advanced permissions. Extensive test coverage using PHPUnit and React Testing Library.",
		techStack: ["React", "Laravel", "MySQL", "WebSockets", "PHPUnit", "React Testing Library"],
	},
	{
		title: "Data Visualization Dashboard",
		description:
			"An interactive dashboard for visualizing complex datasets, built with React and D3.js. Implemented end-to-end tests with Cypress.",
		techStack: ["React", "D3.js", "Node.js", "MongoDB", "Cypress"],
	},
];

// Components
const NavButton = ({
	section,
	activeSection,
	onClick,
}: {
	section: Section;
	activeSection: Section;
	onClick: () => void;
}) => (
	<Button
		variant="ghost"
		onClick={onClick}
		className={
			activeSection === section ? "text-primary font-bold" : "text-foreground hover:text-primary hover:bg-primary/10"
		}
	>
		{section.charAt(0).toUpperCase() + section.slice(1)}
	</Button>
);

const SocialButton = ({ icon: Icon, label }: { icon: React.ElementType; label: string }) => (
	<Button variant="outline" size="icon" aria-label={label} className="bg-primary/10 hover:bg-primary/20 text-primary">
		<Icon className="h-4 w-4" />
	</Button>
);

const SkillCard = ({ category, items }: { category: string; items: string[] }) => (
	<Card className="bg-card hover:bg-card/80 transition-colors">
		<CardHeader>
			<CardTitle className="flex items-center text-primary">
				<CheckCircle className="mr-2 h-5 w-5" />
				{category}
			</CardTitle>
		</CardHeader>
		<CardContent>
			<div className="flex flex-wrap gap-2">
				{items.map((skill) => (
					<Badge key={skill} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
						{skill}
					</Badge>
				))}
			</div>
		</CardContent>
	</Card>
);

const ExperienceCard = ({
	title,
	company,
	period,
	description,
}: {
	title: string;
	company: string;
	period: string;
	description: string;
}) => (
	<Card className="bg-card hover:bg-card/80 transition-colors">
		<CardHeader>
			<CardTitle className="text-primary">{title}</CardTitle>
			<CardDescription className="text-foreground/60">
				{company} | {period}
			</CardDescription>
		</CardHeader>
		<CardContent>
			<p className="text-card-foreground">{description}</p>
		</CardContent>
	</Card>
);

const ProjectCard = ({
	title,
	description,
	techStack,
}: {
	title: string;
	description: string;
	techStack: string[];
}) => (
	<Card className="flex flex-col bg-card hover:bg-card/80 transition-colors">
		<CardHeader>
			<CardTitle className="text-primary">{title}</CardTitle>
		</CardHeader>
		<CardContent className="flex-grow">
			<p className="text-sm text-foreground mb-4">{description}</p>
			<div className="flex flex-wrap gap-2">
				{techStack.map((tech) => (
					<Badge key={tech} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
						{tech}
					</Badge>
				))}
			</div>
		</CardContent>
		<CardFooter className="flex justify-between">
			<Button variant="outline" className="bg-primary/10 hover:bg-primary/20 text-primary">
				<Code className="h-4 w-4 mr-2" />
				View Code
			</Button>
			<Button variant="outline" className="bg-primary/10 hover:bg-primary/20 text-primary">
				<ExternalLink className="h-4 w-4 mr-2" />
				Live Demo
			</Button>
		</CardFooter>
	</Card>
);

export default function Portfolio() {
	const [activeSection, setActiveSection] = useState<Section>("home");

	const scrollToSection = useCallback((sectionId: Section) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
			setActiveSection(sectionId);
		}
	}, []);

	return (
		<div className="min-h-screen bg-background text-foreground">
			<header className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-primary/10">
				<nav className="container mx-auto px-6 py-3">
					<ul className="flex justify-center space-x-4">
						{SECTIONS.map((section) => (
							<li key={section}>
								<NavButton section={section} activeSection={activeSection} onClick={() => scrollToSection(section)} />
							</li>
						))}
					</ul>
				</nav>
			</header>

			<main>
				<section
					id="home"
					className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/20"
				>
					<div className="text-center">
						<h1 className="text-5xl font-bold mb-4 text-primary">John Doe</h1>
						<p className="text-xl mb-8 text-foreground">Senior Full Stack Developer</p>
						<p className="text-lg mb-8 text-foreground/80 max-w-2xl mx-auto">
							Experienced in building scalable web applications with a focus on clean, testable code. Passionate about
							creating efficient, user-friendly solutions for complex problems.
						</p>
						<div className="flex justify-center space-x-4 mb-8">
							<SocialButton icon={Github} label="GitHub" />
							<SocialButton icon={Linkedin} label="LinkedIn" />
							<SocialButton icon={Mail} label="Email" />
						</div>
						<Button
							onClick={() => scrollToSection("contact")}
							className="mr-4 bg-primary text-primary-foreground hover:bg-primary/90"
						>
							Contact Me
						</Button>
						<Button variant="outline" className="bg-primary/10 text-primary hover:bg-primary/20">
							<Download className="mr-2 h-4 w-4" /> Download CV
						</Button>
					</div>
				</section>

				<section id="skills" className="py-20 bg-background">
					<div className="container mx-auto px-6">
						<h2 className="text-3xl font-bold mb-8 text-center text-primary">Skills & Expertise</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{SKILLS.map((skillCategory) => (
								<SkillCard key={skillCategory.category} {...skillCategory} />
							))}
						</div>
					</div>
				</section>

				<section id="experience" className="py-20 bg-muted">
					<div className="container mx-auto px-6">
						<h2 className="text-3xl font-bold mb-8 text-center text-primary">Professional Experience</h2>
						<div className="space-y-8">
							{EXPERIENCES.map((exp, index) => (
								<ExperienceCard key={index} {...exp} />
							))}
						</div>
					</div>
				</section>

				<section id="projects" className="py-20 bg-background">
					<div className="container mx-auto px-6">
						<h2 className="text-3xl font-bold mb-8 text-center text-primary">Featured Projects</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{PROJECTS.map((project, index) => (
								<ProjectCard key={index} {...project} />
							))}
						</div>
					</div>
				</section>

				<section id="contact" className="py-20 bg-muted">
					<div className="container mx-auto px-6">
						<h2 className="text-3xl font-bold mb-8 text-center text-primary">Get in Touch</h2>
						<Card className="max-w-2xl mx-auto bg-card">
							<CardHeader>
								<CardTitle className="text-primary">Contact Form</CardTitle>
								<CardDescription className="text-foreground/60">
									I'm open to new opportunities and collaborations.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<form className="space-y-4">
									<div className="grid grid-cols-2 gap-4">
										<div>
											<label htmlFor="name" className="block text-sm font-medium text-foreground">
												Name
											</label>
											<Input id="name" placeholder="Your name" className="bg-card-foreground/5" />
										</div>
										<div>
											<label htmlFor="email" className="block text-sm font-medium text-foreground">
												Email
											</label>
											<Input id="email" type="email" placeholder="your@email.com" className="bg-card-foreground/5" />
										</div>
									</div>
									<div>
										<label htmlFor="subject" className="block text-sm font-medium text-foreground">
											Subject
										</label>
										<Input id="subject" placeholder="Subject of your message" className="bg-card-foreground/5" />
									</div>
									<div>
										<label htmlFor="message" className="block text-sm font-medium text-foreground">
											Message
										</label>
										<Textarea id="message" placeholder="Your message" rows={4} className="bg-card-foreground/5" />
									</div>
								</form>
							</CardContent>
							<CardFooter>
								<Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Send Message</Button>
							</CardFooter>
						</Card>
					</div>
				</section>
			</main>

			<footer className="bg-primary text-primary-foreground py-8">
				<div className="container mx-auto px-6 text-center">
					<p>&copy; 2023 John Doe. All rights reserved.</p>
					<div className="flex justify-center space-x-4 mt-4">
						<Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
							<Github className="h-4 w-4 mr-2" />
							GitHub
						</Button>
						<Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
							<Linkedin className="h-4 w-4 mr-2" />
							LinkedIn
						</Button>
						<Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
							<Mail className="h-4 w-4 mr-2" />
							Email
						</Button>
					</div>
				</div>
			</footer>
		</div>
	);
}
