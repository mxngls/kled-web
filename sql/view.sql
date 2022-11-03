-- sql used in the view function

select json_build_object(
        'Id',
        word.id,
        'Alpha',
        word.alpha,
        'Frequency',
        word.frequency,
        'HomonymNumber',
        word.homonymnumber,
        'Pronounciation',
        word.pronounciation,
        'Audio',
        word.audio,
        'TypeKr',
        word.typekr,
        'TypeEng',
        word.typeeng,
        'Hanja',
        word.hanja,
        'Hangul',
        word.hangul,
        'Senses',
        (
            select json_agg(
                    json_build_object(
                        'Translation',
                        sense.translation,
                        'Definition',
                        sense.definition,
                        'DefinitionKr',
                        sense.definitionkr,
                        'SenseNr',
                        sense.sensenr,
                        'Examples',
                        (
                            select json_agg(
                                    json_build_object(
                                        'Type',
                                        example_test.type,
                                        'Value',
                                        example_test.value
                                    )
                                )
                            from example_test
                            where example_test.id = word.id
                                AND example_test.sensenr = sense.sensenr
                        ),
                        'Reference',
                        (
                            select json_agg(
                                    json_build_object(
                                        'Type',
                                        reference.type,
                                        'Value',
                                        reference.value,
                                        'Id',
                                        reference.ids
                                    )
                                )
                            from reference
                            where reference.id = word.id
                                AND reference.sensenr = sense.sensenr
                        )
                    )
                )
            from sense
            where sense.id = word.id
        )
    )
from word
where view_id = word.id