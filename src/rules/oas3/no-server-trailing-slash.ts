import { Oas3Rule } from '../../visitors';

export const NoServerTrailingSlash: Oas3Rule = () => {
  return {
    Server(server, { report, location }) {
      if (!server.url) return;
      if (server.url.endsWith('/')) {
        report({
          message: 'Server URL should not have a trailing slash.',
          location: location.child(['url']),
        });
      }
    },
  };
};