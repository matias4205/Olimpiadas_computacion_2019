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
            let: { section_productorId: "$productorId", section_unitId: "$units._id" },
            pipeline: [
              { $match:
                 { $expr:
                    { $and:
                       [
                         { $eq: [ "$productorId",  "$$section_productorId" ] },
                         { $eq: [ "$unitId", "$$section_unitId" ] }
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
            description: {
                $first: "$description"
            },
            units: {
                $push: "$units"
            }
        }
    }
]