import {GiftRecord} from "../records/gift.record";
import {pool} from "../utils/db";

let gift: GiftRecord;

beforeAll( () => {
    gift = new GiftRecord({
        name: 'Tester',
        count: 123,
    });
});

afterAll( async () => {
    await pool.end();
});

test('Not inserted GiftRecord should have no id.', async () => {

    const gift = new GiftRecord({
        name: 'Tester',
        count: 123,
    });
    expect(gift.id).toBeUndefined();
});

test('Inserted GiftRecord should have an id', async () => {
   const nc = new GiftRecord({
       name: 'Tester',
       count: 123,
   });

   await gift.insert();

   expect(gift.id).toBeDefined();
}, 10000);
