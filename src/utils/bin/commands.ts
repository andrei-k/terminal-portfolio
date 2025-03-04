// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Here are the available commands:
\n<span class="text-light-gray dark:text-dark-gray">${c}</span>

[tab]: trigger completion
[ctrl+l]/clear: clear terminal
`;
};

// Redirection
/*
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};
*/

// About
export const about = async (args: string[]): Promise<string> => {
  return `
Hi, I am ${config.name}.

I work as the Manager of Web Evolution and Front-End Development at Concordia University in Montreal, specializing in AEM (Adobe Experience Manager) development, advancing teams, and accelerating AI adoption.

With over 20 years of professional experience, I have worked in numerous industries, including: Aerospace, Web Agencies and Consultancies, and currently, in Higher-Education.

I hold a Bachelor's Degree in Computer Science from Dalhousie University in Halifax and a Graduate Certificate in Business Administration from the John Molson School of Business, Concordia University.

To learn more about me, type 'linkedin' or 'github'`;
};

export const skills = async (args: string[]): Promise<string> => {
	return `
JavaScript, Go, Java, JSP, HTML, CSS, PHP
Adobe Experience Manager (AEM), Vue.js, Twixl, Docker, Heroku`;
};

export const status = async (args: string[]): Promise<string> => {
	return `
Working full-time at Concordia University, Montreal, Canada
Married and a father of two young children`;
};

/*
export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};
*/

// Contact
/*
export const email = async (args: string[]): Promise<string> => {
  return `Reach me at: <a href="mailto:${config.email}" target="_blank">${config.email}</a>`;
};
*/

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);
  return 'Opening GitHub...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);
  return 'Opening LinkedIn...';
};

export const soundcloud = async (args: string[]): Promise<string> => {
  window.open(`https://soundcloud.com/andrei-k/likes/`);
  return 'Opening SoundCloud...';
};

/*
// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};
*/

// Typical linux commands
/*
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};
*/

/*
export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};
*/

/*
export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};
*/

/*
export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};
*/

/*
export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};
*/

// Banner
export const banner = (args?: string[]): string => {
  return `<div id="ascii-banner-full">
 █████╗ ███╗   ██╗██████╗ ██████╗ ███████╗██╗    ██╗  ██╗
██╔══██╗████╗  ██║██╔══██╗██╔══██╗██╔════╝██║    ██║ ██╔╝
███████║██╔██╗ ██║██║  ██║██████╔╝█████╗  ██║    █████╔╝
██╔══██║██║╚██╗██║██║  ██║██╔══██╗██╔══╝  ██║    ██╔═██╗
██║  ██║██║ ╚████║██████╔╝██║  ██║███████╗██║    ██║  ██╗██╗
╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝    ╚═╝  ╚═╝╚═╝
</div><div id="ascii-banner-small">
 █████╗ ███╗   ██╗██████╗ ██████╗ ███████╗██╗
██╔══██╗████╗  ██║██╔══██╗██╔══██╗██╔════╝██║
███████║██╔██╗ ██║██║  ██║██████╔╝█████╗  ██║
██╔══██║██║╚██╗██║██║  ██║██╔══██╗██╔══╝  ██║
██║  ██║██║ ╚████║██████╔╝██║  ██║███████╗██║
╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝
</div>

Welcome! Try 'about' or 'help' to get started.
`;
};
