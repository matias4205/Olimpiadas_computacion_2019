module.exports = (productorId) => [
    {
        $match: {
            productorId
        }
    },
    {
        $unwind: {
            path: '$units'
        }
    },
    {
        $lookup: {
            from: 'readings',
            let: { section_productorId: "$productorId", section_unitName: "$units.unitName" },
            pipeline: [
              { $match:
                 { $expr:
                    { $and:
                       [
                         { $eq: [ "$productorId",  "$$section_productorId" ] },
                         { $eq: [ "$unitName", "$$section_unitName" ] }
                       ]
                    }
                 }
              }
            ],
            as: 'units.readings'
        }
    },
    {
        $group: {
            _id: "$_id",
            sectionName: {
                '$first': '$sectionName'
            },
            description: {
                $first: "$description"
            },
            units: {
                $push: "$units"
            }
        }
    }
]