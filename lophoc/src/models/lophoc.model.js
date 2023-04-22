const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const lophocSchema = mongoose.Schema(
  {
    malh: {
      type: String,
      required: true,
      trim: true,
    },
    tenlop: {
      type: String,
    },
    soluongsv: {
      type: Number,
    },
    magv: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
lophocSchema.plugin(toJSON);
lophocSchema.plugin(paginate);

/**
 * @typedef Lophoc
 */
const Lophoc = mongoose.model('Lophoc', lophocSchema);

module.exports = Lophoc;
