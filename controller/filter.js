const Season = require('../model/season');
const Kino = require('../model/kino');

exports.filterLanguage = async (req, res, next) => {
    const kino = await Kino.find({ language: req.params.id }).sort({createdAt: -1})
    const season = await Season.find({ language: req.params.id }).sort({createdAt: -1})
    res.json({
        kino: kino,
        season: season,
    })
}
exports.filterYear = async (req, res, next) => {
    const kino = await Kino.find({ year: req.params.id }).sort({createdAt: -1})
    const season = await Season.find({ year: req.params.id }).sort({createdAt: -1})
    res.json({
        kino: kino,
        season: season,
    })
}
