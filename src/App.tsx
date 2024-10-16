import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Download, Code, ExternalLink, CheckCircle } from "lucide-react";

function App() {
	const [activeSection, setActiveSection] = useState("home");

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
			setActiveSection(sectionId);
		}
	};

	const skills = [
		{
			category: "Frontend",
			items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Redux Toolkit", "Tailwind CSS"],
		},
		{ category: "Backend", items: ["Golang", "Laravel", "Node.js", "MySQL"] },
		{ category: "Testing", items: ["Jest", "React Testing Library", "Cypress", "PHPUnit", "Go testing"] },
		{ category: "Other", items: ["Git", "CI/CD", "Agile methodologies", "RESTful APIs", "GraphQL"] },
	];

	const experiences = [
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

	const projects = [
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

	return (
		<div className="min-h-screen bg-gray-50 text-gray-900">
			<header className="fixed top-0 left-0 right-0 z-10 bg-white shadow-sm">
				<nav className="container mx-auto px-6 py-3">
					<ul className="flex justify-center space-x-4">
						{["home", "skills", "experience", "projects", "contact"].map((section) => (
							<li key={section}>
								<Button
									variant="ghost"
									onClick={() => scrollToSection(section)}
									className={activeSection === section ? "text-blue-600" : "text-gray-600 hover:text-blue-600"}
								>
									{section.charAt(0).toUpperCase() + section.slice(1)}
								</Button>
							</li>
						))}
					</ul>
				</nav>
			</header>

			<main className="pt-16">
				<section
					id="home"
					className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200"
				>
					<div className="text-center">
						<h1 className="text-5xl font-bold mb-4 text-gray-800">John Doe</h1>
						<p className="text-xl mb-8 text-gray-600">Senior Full Stack Developer</p>
						<p className="text-lg mb-8 text-gray-600 max-w-2xl mx-auto">
							Experienced in building scalable web applications with a focus on clean, testable code. Passionate about
							creating efficient, user-friendly solutions for complex problems.
						</p>
						<div className="flex justify-center space-x-4 mb-8">
							<Button variant="outline" size="icon">
								<Github className="h-4 w-4" />
							</Button>
							<Button variant="outline" size="icon">
								<Linkedin className="h-4 w-4" />
							</Button>
							<Button variant="outline" size="icon">
								<Mail className="h-4 w-4" />
							</Button>
						</div>
						<Button onClick={() => scrollToSection("contact")} className="mr-4">
							Contact Me
						</Button>
						<Button variant="outline">
							<Download className="mr-2 h-4 w-4" /> Download CV
						</Button>
					</div>
				</section>

				<section id="skills" className="py-20 bg-white">
					<div className="container mx-auto px-6">
						<h2 className="text-3xl font-bold mb-8 text-center">Skills & Expertise</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{skills.map((skillCategory) => (
								<Card key={skillCategory.category}>
									<CardHeader>
										<CardTitle className="flex items-center">
											<CheckCircle className="mr-2 h-5 w-5 text-green-500" />
											{skillCategory.category}
										</CardTitle>
									</CardHeader>
									<CardContent>
										<div className="flex flex-wrap gap-2">
											{skillCategory.items.map((skill) => (
												<Badge key={skill} variant="secondary">
													{skill}
												</Badge>
											))}
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				<section id="experience" className="py-20 bg-gray-100">
					<div className="container mx-auto px-6">
						<h2 className="text-3xl font-bold mb-8 text-center">Professional Experience</h2>
						<div className="space-y-8">
							{experiences.map((exp, index) => (
								<Card key={index}>
									<CardHeader>
										<CardTitle>{exp.title}</CardTitle>
										<CardDescription>
											{exp.company} | {exp.period}
										</CardDescription>
									</CardHeader>
									<CardContent>
										<p>{exp.description}</p>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				<section id="projects" className="py-20 bg-white">
					<div className="container mx-auto px-6">
						<h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{projects.map((project, index) => (
								<Card key={index} className="flex flex-col">
									<CardHeader>
										<CardTitle>{project.title}</CardTitle>
									</CardHeader>
									<CardContent className="flex-grow">
										<p className="text-sm text-gray-600 mb-4">{project.description}</p>
										<div className="flex flex-wrap gap-2">
											{project.techStack.map((tech) => (
												<Badge key={tech} variant="secondary">
													{tech}
												</Badge>
											))}
										</div>
									</CardContent>
									<CardFooter className="flex justify-between">
										<Button variant="outline">
											<Code className="h-4 w-4 mr-2" />
											View Code
										</Button>
										<Button variant="outline">
											<ExternalLink className="h-4 w-4 mr-2" />
											Live Demo
										</Button>
									</CardFooter>
								</Card>
							))}
						</div>
					</div>
				</section>

				<section id="contact" className="py-20 bg-gray-100">
					<div className="container mx-auto px-6">
						<h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
						<Card className="max-w-2xl mx-auto">
							<CardHeader>
								<CardTitle>Contact Form</CardTitle>
								<CardDescription>I'm open to new opportunities and collaborations.</CardDescription>
							</CardHeader>
							<CardContent>
								<form className="space-y-4">
									<div className="grid grid-cols-2 gap-4">
										<div>
											<label htmlFor="name" className="block text-sm font-medium text-gray-700">
												Name
											</label>
											<Input id="name" placeholder="Your name" />
										</div>
										<div>
											<label htmlFor="email" className="block text-sm font-medium text-gray-700">
												Email
											</label>
											<Input id="email" type="email" placeholder="your@email.com" />
										</div>
									</div>
									<div>
										<label htmlFor="subject" className="block text-sm font-medium text-gray-700">
											Subject
										</label>
										<Input id="subject" placeholder="Subject of your message" />
									</div>
									<div>
										<label htmlFor="message" className="block text-sm font-medium text-gray-700">
											Message
										</label>
										<Textarea id="message" placeholder="Your message" rows={4} />
									</div>
								</form>
							</CardContent>
							<CardFooter>
								<Button className="w-full">Send Message</Button>
							</CardFooter>
						</Card>
					</div>
				</section>
			</main>

			<footer className="bg-gray-800 text-white py-8">
				<div className="container mx-auto px-6 text-center">
					<p>&copy; 2023 John Doe. All rights reserved.</p>
					<div className="flex justify-center space-x-4 mt-4">
						<Button variant="ghost" size="sm">
							<Github className="h-4 w-4 mr-2" />
							GitHub
						</Button>
						<Button variant="ghost" size="sm">
							<Linkedin className="h-4 w-4 mr-2" />
							LinkedIn
						</Button>
						<Button variant="ghost" size="sm">
							<Mail className="h-4 w-4 mr-2" />
							Email
						</Button>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default App;
