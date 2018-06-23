/**
 * Lugares.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  // attributes: {
  //
  //   lugar_id: { type: 'number'  },
  //   descripcion: { type: 'string' },
  //   latitud: { type: 'string' },
  //   longitud: { type: 'string' },
  //   url_imagen: { type: 'string' }
  // },
  tableName: "lugares",
  attributes: {
  // 	lugar_id: {
	// 	primaryKey: true,
	// 	unique: true,
	// 	autoIncrement: true,
	// 	type: "integer"
	// },
  lugar_id: "integer",
	descripcion: "string",
	latitud: "string",
	longitud: "string",
	url_imagen: "string"
  },
};
