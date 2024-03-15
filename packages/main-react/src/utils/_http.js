const request = (baseUrl) => async (url, options) => {
  const response = await fetch(url, options);

  if (!response.ok) {
    const body = await response.json().catch(() => ({}));
    const responseWithBody = { ...response, body };
    throw new RequestError(responseWithBody);
  }

  const body = await response.json().catch(() => ({}));
  const responseWithBody = { ...response, body };
  return responseWithBody;
};

const interceptedRequest = interceptor.onRequest(url, options);
const response = await fetch(
  interceptedRequest.url,
  interceptedRequest.options
);

if (!response.ok) {
  const body = await response.json().catch(() => ({}));
  const responseWithBody = { ...response, body };
  throw new RequestError(interceptor.onError(responseWithBody));
}

const body = await response.json().catch(() => ({}));
const responseWithBody = { ...response, body };
return interceptor.onSuccess(responseWithBody);

export const interceptor = {
  configs: null,
  onRequest: (url, options, configs) => ({ url, options }),
  onSuccess: (response) => {},
  onError: (response) => {},
  set({ configs, onRequest, onSuccess, onError }) {
    if (configs) this.configs = configs;
    if (onRequest) this.onRequest = onRequest;
    if (onSuccess) this.onSuccess = onSuccess;
    if (onError) this.onError = onError;
  },
};

const useInterceptor = ({ configs, onRequest, onSuccess, onError }) => {
  useEffect(() => {
    interceptor.set({ configs, onRequest, onSuccess, onError });
  }, [configs, onRequest, onSuccess, onError]);
};

const App = () => {
  const userContext = useUserContext;

  useInterceptor({
    configs: {
      baseUrl: "http://localhost:8080",
      accessToken: userContext.accessToken,
    },
    onRequest: (url, options, configs) => ({
      url: `${configs.baseUrl}${url}`,
      options: {
        ...options,
        headers: {
          ...options.headers,
          Authorization: `Bearer ${configs.accessToken}`,
        },
      },
    }),
    onError: (response) => {
      if (response.status === 401) {
        userContext.logout();
      }
    },
  });

  // ...
};

// get:
