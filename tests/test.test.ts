import {ChildRecord} from "../records/child.record";

const myMock = jest
    .spyOn(ChildRecord, 'getOne')
    .mockImplementation(async (id: string) => {
        return new ChildRecord({
            id,
            name: 'Testowy',
            giftId: '123',
        });
    });

test('foo bar test test', async  () => {

    const child = ChildRecord.getOne('123');

    console.log(child)

    expect(child).toBeDefined();
});