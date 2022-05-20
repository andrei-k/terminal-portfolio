import config from '../../../config.json';

const summary = async (args: string[]): Promise<string> => {
return `                                                  
 Summary
-----------
 ${config.name}
 <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
 <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
 <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
-----------
`;
};

export default summary;
