// src/api/entities.js


export const Contact = {
  list: async () => [
    { id: 1, name: "John Doe", phone: "+1-555-0100" },
    { id: 2, name: "Jane Smith", phone: "+1-555-0101" },
  ],
  create: async (data) => ({ id: Math.random(), ...data }),
};

export const Phone = {
  list: async () => {
    try {
      const res = await fetch("http://looped.local:3001/api/lines");
      if (!res.ok) throw new Error("Failed to fetch lines");
      return await res.json();
    } catch (err) {
      console.error("Error fetching phones:", err);
      return [];
    }
  },
};


export const CallHistory = {
  list: async () => {
    const now = new Date();
    return [
      {
        id: "101",
        phone_id: "1",
        contact_name: "Maddy Dweck",
        duration: "2m 15s",
        // ✅ valid ISO timestamp
        call_date: new Date(now.getTime() - 1000 * 60 * 5).toISOString(),
      },
      {
        id: "102",
        phone_id: "1",
        contact_name: "Sim DAWG",
        duration: "1m 45s",
        // ✅ valid ISO timestamp
        call_date: new Date(now.getTime() - 1000 * 60 * 15).toISOString(),
      },
      {
        id: "103",
        phone_id: "2",
        contact_name: "Buter",
        duration: "3m 20s",
        // ✅ valid ISO timestamp
        call_date: new Date(now.getTime() - 1000 * 60 * 30).toISOString(),
      },
    ];
  },
};



export const Subscription = {
  get: async () => ({
    plan: "Local Offline Mode",
    active: true,
  }),
};

export const User = {
  get: async () => ({
    id: "local-user-001",
    name: "Offline Mode User",
    email: "offline@example.com",
  }),
};
