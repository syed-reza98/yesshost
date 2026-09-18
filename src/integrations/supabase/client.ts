// Supabase compatibility bridge for Next.js 16 + MySQL architecture
const createChainable = () => {
  const handler: any = {
    get: (target: any, prop: string) => {
      if (prop === "then") {
        return (resolve: any) => resolve({ data: [], error: null, count: 0 });
      }
      return (...args: any[]) => createChainable();
    },
  };
  return new Proxy({}, handler);
};

export const supabase: any = {
  auth: {
    onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
    getSession: async () => ({ data: { session: null }, error: null }),
    getUser: async () => ({ data: { user: null }, error: null }),
    signInWithPassword: async () => ({ data: null, error: null }),
    signOut: async () => ({ error: null }),
  },
  from: (table: string) => createChainable(),
  rpc: (func: string, params: any) => Promise.resolve({ data: null, error: null }),
  channel: () => ({
    on: function() { return this; },
    subscribe: () => ({ unsubscribe: () => {} }),
    send: () => Promise.resolve(),
  }),
  removeChannel: () => {},
  functions: {
    invoke: async () => ({ data: null, error: null }),
  },
};
