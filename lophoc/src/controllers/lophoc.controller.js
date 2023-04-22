const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { lophocService } = require('../services');

const createLophoc = catchAsync(async (req, res) => {
  const lophoc = await lophocService.createLophoc(req.body);
  res.status(httpStatus.CREATED).send(lophoc);
});

const getLophocs = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await lophocService.queryLophocs(filter, options);
  res.send(result);
});

const getLophoc = catchAsync(async (req, res) => {
  const lophoc = await lophocService.getLophocById(req.params.id);
  if (!lophoc) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Lophoc not found');
  }
  res.send(lophoc);
});

const updateLophoc = catchAsync(async (req, res) => {
  const lophoc = await lophocService.updateLophocById(req.params.id, req.body);
  res.send(lophoc);
});

const deleteLophoc = catchAsync(async (req, res) => {
  await lophocService.deleteLophocById(req.params.id);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createLophoc,
  getLophocs,
  getLophoc,
  updateLophoc,
  deleteLophoc,
};
