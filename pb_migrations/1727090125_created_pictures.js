/// <reference path="../pb_data/types.d.ts" />
migrate(
  (db) => {
    const collection = new Collection({
      id: "pwrlix0zyjgig4q",
      created: "2024-09-23 11:15:25.452Z",
      updated: "2024-09-23 11:15:25.452Z",
      name: "pictures",
      type: "base",
      system: false,
      schema: [
        {
          system: false,
          id: "4yvranpj",
          name: "image",
          type: "url",
          required: false,
          presentable: false,
          unique: false,
          options: {
            exceptDomains: null,
            onlyDomains: null,
          },
        },
      ],
      indexes: [],
      listRule: null,
      viewRule: null,
      createRule: null,
      updateRule: null,
      deleteRule: null,
      options: {},
    });

    return Dao(db).saveCollection(collection);
  },
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("pwrlix0zyjgig4q");

    return dao.deleteCollection(collection);
  },
);
