addHttpRequestHandler(
      '/test',               // (string) regex used to filter the requests to be intercepted
      'testMIME.js',  // (string) name of the file where the request handler function is specified
      'testMIME'         // (string) name of the request handler function
);