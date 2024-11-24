import { DAY_OF_WEEK } from "@/data/constant";
import {  relations } from "drizzle-orm";
import { pgTable, text, integer,  uuid,  timestamp, boolean, index, pgEnum } from "drizzle-orm/pg-core";
 


const createdAt = timestamp('created_at').notNull().defaultNow()
const updatedAt = timestamp('updated_at').notNull().defaultNow().$onUpdate(()=> new Date())

export const EventTable = pgTable("events", {
    id: uuid('id').primaryKey().defaultRandom(),
    name: text('name').notNull(),
    description: text('description'),
    durationInMinutes: integer('duration_in_minutes').notNull(),
    clerkUserId: text('clerk_user_id').notNull(),
    isActive: boolean('is_active').notNull().default(true),
    createdAt,
    updatedAt,
}, table=>({
    clerkUserIdIndex: index("clerkUserIdIndex").on(table.clerkUserId)
    // clerkUserIdIndex: index("events_clerkUserIdIndex").on(table.clerkUserId) // Unique index name

}))

export const schaduleTable = pgTable("schadule",{
    id: uuid('id').primaryKey().defaultRandom(),
    timezone: text('timezone').notNull(),
    clerkUserId: text('clerk_user_id').notNull(), 
    createdAt,
    updatedAt,
})


export const schaduleRelations = relations(schaduleTable,({many})=>({
    availabilities: many(schaduleAvailabilityTable)
}))

export const  schaduleDayOfWeekEnum  = pgEnum("day", DAY_OF_WEEK)


export const schaduleAvailabilityTable = pgTable('schaduleAvalabilityTable',{
    id: uuid('id').primaryKey().defaultRandom(),
    schaduleId: uuid("schaduleId").notNull().references(()=> schaduleTable.id,{onDelete: "cascade"}),
    startTime: text("startTime").notNull(),
    endTime: text("endTime").notNull(),
    dayOfWeek: schaduleDayOfWeekEnum("dayOfWeek").notNull(),

}, table=>({
    schaduleIdIndex: index("schaduleIdIndex").on(table.schaduleId)
    // schaduleIdIndex: index("schaduleIdIndex").on(table.schaduleId) // Unique index name

}))

 export const  schaduleAvailabilityRelations =  relations(schaduleAvailabilityTable ,({one})=>({
    schadule: one(schaduleTable,{
        fields: [schaduleAvailabilityTable.schaduleId],
        references: [schaduleTable.id]
    })

 }))