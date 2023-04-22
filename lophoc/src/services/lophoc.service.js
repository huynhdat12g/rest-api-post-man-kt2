const httpStatus = require('http-status');
const { Lophoc } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a lophoc
 * @param {Object} lophocBody
 * @returns {Promise<Lophoc>}
 */
const createLophoc = async (lophocBody) => {
  return Lophoc.create(lophocBody);
};

/**
 * Query for lophocs
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryLophocs = async (filter, options) => {
  const lophocs = await Lophoc.paginate(filter, options);
  return lophocs;
};

/**
 * Get lophoc by id
 * @param {ObjectId} id
 * @returns {Promise<Lophoc>}
 */
const getLophocById = async (id) => {
  return Lophoc.findById(id);
};

/**
 * Get lophoc by email
 * @param {string} email
 * @returns {Promise<Lophoc>}
 */
const getLophocByEmail = async (email) => {
  return Lophoc.findOne({ email });
};

/**
 * Update lophoc by id
 * @param {ObjectId} lophocId
 * @param {Object} updateBody
 * @returns {Promise<Lophoc>}
 */
const updateLophocById = async (lophocId, updateBody) => {
  const lophoc = await getLophocById(lophocId);
  Object.assign(lophoc, updateBody);
  await lophoc.save();
  return lophoc;
};

/**
 * Delete lophoc by id
 * @param {ObjectId} lophocId
 * @returns {Promise<Lophoc>}
 */
const deleteLophocById = async (lophocId) => {
  const lophoc = await getLophocById(lophocId);
  if (!lophoc) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Lophoc not found');
  }
  await lophoc.remove();
  return lophoc;
};

module.exports = {
  createLophoc,
  queryLophocs,
  getLophocById,
  getLophocByEmail,
  updateLophocById,
  deleteLophocById,
};
