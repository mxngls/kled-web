-- sql used in the search_include function

select json_agg(
        distinct jsonb_build_object(
            'item',
            jsonb_build_object(
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
                            jsonb_build_object(
                                'Translation',
                                sense.translation,
                                'Definition',
                                sense.definition,
                                'DefinitionKr',
                                sense.definitionkr,
                                'SenseNr',
                                sense.sensenr
                            )
                        )
                    from sense
                    where sense.id = word.id
                ),
                'Inflection',
                inflection.inflections,
                'InflectionLinks',
                inflection.inflectionlinks
            )
        )
    )
from word
    full join inflection on word.id = inflection.id
    full join sense on word.id = sense.id
where word.hangul similar to concat('%', term, '%')
    or sense.translation similar to concat('%', term, '%')
    or inflection.inflections similar to concat('%', term, '%')
    or word.hanja similar to concat('%', term, '%');