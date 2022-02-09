const Kino = require('../model/kino')
const Season = require('../model/season')
const Slider = require('../model/slider')


exports.homepage = async (req, res, next) => {
    const kino = await Kino
        .find()
        .populate(['country'])
        .populate(['janr'])
        .populate(['language'])
        .populate(['category'])
        .populate(['author'])
        .populate(['tag'])
        .populate(['age'])
        .populate(['year'])
        .sort({ createdAt: -1 })
        .limit(4)

    const season = await Season
        .find()
        .populate(['country'])
        .populate(['janr'])
        .populate(['language'])
        .populate(['category'])
        .populate(['author'])
        .populate(['tag'])
        .populate(['age'])
        .populate(['year'])
        .sort({ createdAt: -1 })
        .limit(4)

    res.json({
        kino: kino,
        season: season,
    })

}