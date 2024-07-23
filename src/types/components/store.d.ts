type UserStore = EntityStore<User[]>;
type LeaseStore = EntityStore<Leases[]>;
type ManageLeaseStoreWithoutTimestamps = OmitFields<
  ManageLeases,
  "user" | "lease"
>;

type ManageLeaseStore = EntityStore<ManageLeaseStoreWithoutTimestamps[]>;
