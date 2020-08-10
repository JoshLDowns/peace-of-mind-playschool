import React from "react";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  ...theme.global,
  boldText: {
    fontWeight: "700",
  },
}));

const Handbook = () => {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.mainWrapper}>
        <Grid container spacing={4} alignItems="center" justify="center">
          <Grid
            item
            xs={11}
            component={Paper}
            classes={{ root: classes.paperRoot }}
            style={{ textAlign: "center", marginBottom: "20px" }}
          >
            <Typography className={classes.title}>
              Peace of Mind Playschool Handbook
            </Typography>
          </Grid>
          <Grid
            item
            xs={11}
            component={Paper}
            classes={{ root: classes.paperRoot }}
          >
            <Typography className={classes.handbookText}>
              <span className={classes.boldText}>PHILOSOPHY:</span> I opened
              Peace of Mind Playschool in 2018 to provide families with high
              quality, affordable child care with the belief that children must
              be respected, and that children love to learn. I believe in
              providing children with an environment where they have space to
              explore and create, collaborate with peers and learn through
              nature. Nature offers infinite ways to support a child’s
              cognitive, physical, and emotional development, and interacting
              with natural environments and materials allows children to learn
              by doing, and experiment with ideas. When children are engaged in
              learning about science and nature, they are also learning
              strategies for active exploration, thinking and reasoning, and
              developing working theories for making sense of the natural,
              social, physical and material worlds around them. By promoting
              learning through nature, I hope to foster the development of
              nurturing, peaceful, and caring citizens. My program reflects the
              understanding that play and outdoor exploration is essential to
              children’s health and well-being, and foundational to their
              learning. I promise to nurture your child, provide a safe and
              loving environment, and give them the freedom to explore and
              create.
            </Typography>
            <Typography className={classes.handbookText}>
              <span className={classes.boldText}>
                PROVIDER EDUCATION, TRAINING AND STARS:
              </span>{" "}
              I keep all my professional documentation and training on file. I
              am always CPR and first aid certified. I am happy to share my
              professional documentation with you at any time and will update
              you on classes, training and improvements I make. I am willing to
              provide resources and support for any behaviors or challenges you
              want to modify with your children.
            </Typography>
            <Typography className={classes.handbookText}>
              <span className={classes.boldText}>CONFIDENTIALITY:</span> We
              shall not disclose or permit the use of any information regarding
              an individual child or family gained through our interaction with
              the child and family, or any records, files, video, photos,
              assessments or documentation unless parental permission is
              specifically granted, except to the Child Development Division.{" "}
            </Typography>
            <Typography className={classes.handbookText}>
              <span className={classes.boldText}>THE ROLE OF FAMILIES:</span> I
              encourage families to be involved with the program. You are
              welcome to visit and/or volunteer whenever your child is in care.
              Opportunities to volunteer include: Reading a story during
              drop-off or pick-up, helping set up or clean-up for events and
              parties, helping children during project/arts &amp; crafts time,
              chaperoning field trips, and coming in to teach children a game,
              hobby or recipe. We will work together to arrange a convenient
              time for volunteering.
            </Typography>
            <Typography className={classes.handbookText}>
              <span className={classes.boldText}>PARENT CONFERENCES:</span>{" "}
              Conferences will be offered twice a year, generally in January and
              June. You may request a formal or informal meeting at any time and
              any request shall be accommodated within ten business days.
              Parents are not required to sign up for a conference and will be
              informed of their children’s day, mood, schedule, development, and
              curriculum on a daily basis.{" "}
            </Typography>
            <Typography className={classes.handbookText}>
              <span className={classes.boldText}>
                HOURS, VACATIONS, HOLIDAYS AND OTHER ABSENCES:
              </span>{" "}
              Peace of Mind Playschool is open Monday through Friday. Hours are
              currently variable depending on the needs of families, but no
              earlier than 7:00 a.m. and no later than 5:00 p.m. If care is ever
              needed after 5:00 p.m., it must be previously discussed and agreed
              upon.
            </Typography>
            <Typography
              className={classes.handbookText}
              style={{ fontWeight: "700" }}
            >
              Peace of Mind Playschool's paid holidays are as follows:
            </Typography>
            <ul className={classes.handbookText}>
              <li>January: New Year's Day</li>
              <li>May: Memorial Day</li>
              <li>July: Independence Day</li>
              <li>September: Labor Day</li>
              <li>
                November: Thanksgiving Day (as well as the following Friday)
              </li>
              <li>December: Chistmas Day</li>
            </ul>
            <Typography className={classes.handbookText}>
              In addition to the above paid holidays, I will also have two weeks
              paid vacation, up to five optional,{" "}
              <span className={classes.boldText}>unpaid</span> personal days and
              I reserve the right to close for five additional paid sick days
              for my children or myself. I will notify you as soon as possible
              if this occurs. I will post my vacation schedule at least 4 weeks
              in advance. I intend to use one week of vacation time during
              Christmas/New Year’s and another full week during a summer month.{" "}
            </Typography>
            <Typography className={classes.handbookText}>
              I may have an assistant who will work from time-to-time to cover
              appointments for myself or if I have to leave for appointments for
              my children. I will notify you in advance if an assistant will be
              coming in. If I need to close due to illness or emergency I will
              make every effort to notify you as much in advance as possible. I
              will also make every effort to find an assistant to cover so I do
              not have to close. I would always leave your children in the care
              of someone with whom I would trust my own children. Should I have
              an assistant to cover my absence, that person will have experience
              caring for children and will be required to be first aid and CPR
              certified.{" "}
            </Typography>
            <Typography
              className={classes.handbookText}
              style={{ fontWeight: "700" }}
            >
              TUITION POLICY AND CHARGES
            </Typography>
            <ul className={classes.handbookText}>
              <li>
                Full time: $175.00 per week for each child over 2 yrs old (if
                extended hours are needed until 5:15, add $25 per week per
                child.)
              </li>
              <li>
                Full time infant: $195.00 per week (children under 2 yrs old)
              </li>
              <li>Part time: $40.00 per day for each child</li>
              <li>
                School age: Currently not accepting school age as I am not on
                the bus route and cannot provide transportation to the nearest
                bus stop. I can take school age children during school vacations
                as long as they are enrolled for all vacations, including
                summer. The rates are the same as above.
              </li>
            </ul>
            <Typography className={classes.handbookText}>
              I reserve the right to an annual rate increase each January. You
              will be notified in advance if my rates will be increasing.
            </Typography>
            <Typography className={classes.handbookText}>
              Tuition charges are due by the Friday morning preceding the week
              of care - tuition is prepaid for the following week. Payments are
              accepted in check, cash or electronically through Venmo.
            </Typography>
            <Typography className={classes.handbookText}>
              The charge for late payments is $25.00. NO CREDIT IS GIVEN FOR
              FAMILY VACATION DAYS, HOLIDAYS, SICK DAYS, EMERGENCY CLOSINGS OR
              DAYS WHEN YOUR CHILD IS NOT BROUGHT TO CHILDCARE.
            </Typography>
            <Typography className={classes.handbookText}>
              <span className={classes.boldText}>EVENING LATE FEES:</span> The
              late fee for children after your contracted time is $5.00 for
              every five minutes. Please notify me as soon as possible if you
              are going to be late. Thank you for your consideration.
            </Typography>
            <Typography className={classes.handbookText}>
              <span className={classes.boldText}>SCHOOL CLOSINGS:</span> Peace
              of Mind Playschool will be open during school closings. If you
              decide to keep your child home when school is closed, credit is
              not given for these days.
            </Typography>
            <Typography className={classes.handbookText}>
              <span className={classes.boldText}>TWO-WEEK NOTICE:</span> In the
              event that you decide to discontinue your child’s care with us, we
              must receive a two-week written notice. Parents are responsible
              for tuition payments during that two-week period. If I can no
              longer care for your child for any reason, I will give you at
              least a two-week notice. Examples of why I would terminate your
              child’s care: ** failure of parent to pay tuition on time or pick
              up child on time **, my inability to meet the child’s needs
              without additional staff.
            </Typography>
            <Typography className={classes.handbookText}>
              <span className={classes.boldText}>DAILY SCHEDULE</span>
              <br />
              <br />
              <span className={classes.boldText}>
                INFANTS’ DAILY SCHEDULE:
              </span>{" "}
              The schedule of the day is set up individually for each child and
              includes small and large motor skills, floor play and creative
              play with age appropriate toys and materials. Reading, cuddling,
              singing and interactive play with educational toys are a major
              part of the day. Meals, snacks, bottles and naps are open to
              change depending on each child’s individual needs. Generally,
              within a few weeks we fall into a predictable schedule. The ideal
              goal is to include infants in as much of the curriculum as
              possible and have one nap fall within the same nap time as the
              other children (12:30 to 2:30/3:00).
            </Typography>
            <Typography
              className={classes.handbookText}
              style={{ fontWeight: "700" }}
            >
              TODDLERS’ AND PRESCHOOLERS’ DAILY SCHEDULE:
            </Typography>
            <ul className={classes.handbookText}>
              <li>7:xx (open time may vary) open/free play</li>
              <li>
                8:30 circle/meeting time; songs, ABC’s, numbers, weather &amp;
                special events
              </li>
              <li>9:00 snack</li>
              <li>
                9:30 project/activity time: arts &amp; crafts, playdoh, science,
                baking, etc. (this may take place outside, as weather permits)
              </li>
              <li>10:00 outdoor play/gross motor play</li>
              <li>11:30 quiet play, reading (while lunch is prepared)</li>
              <li>11:45 lunch</li>
              <li>12:30 nap/rest time, quiet time (approximately 2 hours)</li>
              <li>2:45 snack</li>
              <li>
                3:15 outdoor play (weather permitting) or choice time; blocks,
                puzzles, books, games
              </li>
            </ul>
            <Typography className={classes.handbookText}>
              Your ideas and suggestions about your child’s day are always
              welcome. Birthdays are always a special event, and we will
              celebrate each child’s birthday. Parents are welcome to provide a
              snack or special treat, or I can provide it. Parents are always
              welcome to attend the celebration.
            </Typography>
            <Typography className={classes.handbookText}>
              <span className={classes.boldText}>ART ACTIVITIES:</span> I
              believe in the process rather than the product, and that children
              should finish when they feel ready. I will always offer
              assistance, but will not finish their project for them. This
              fosters self-esteem and creativity. Some of the art activities
              offered are: coloring, stickers, playdoh, paint, collage making,
              cutting and gluing. We will also have several seasonal and/or
              holiday crafts.
            </Typography>
            <Typography className={classes.handbookText}>
              <span className={classes.boldText}>OUTSIDE TIME:</span> Outside
              time is weather permitting, however there will be a strong focus
              on outdoor play and our time will be spent outdoors as much as
              possible. Please send appropriate clothing for the weather and
              time of year, and a few changes of clothes. During summer months
              we may take walks in the woods or down the road. We will have
              water play. A bathing suit that can stay at daycare is highly
              recommended. In the winter we will go outside when the weather is
              not severe and it’s not too windy. Generally, we go outside twice
              each day in warmer months, and once each day in the winter months.
            </Typography>
            <Typography className={classes.handbookText}>
              <span className={classes.boldText}>MEAL INFORMATION:</span> Lunch
              with milk and snacks will be provided for your child. A hearty
              morning snack will be provided. Children are offered food but not
              forced to eat it. I strive to provide healthy, high quality food.
              Snacks and meals will always be nutritious, clean food. PLEASE
              INFORM ME OF ANY DISLIKES OR ALLERGIES. Children may bring a lunch
              from home as long as it is in a paper bag labeled with their name
              and does not require refrigeration. Any containers used will be
              returned to be washed at home. Lunches from home must contain
              nutritious food and may not contain sugary foods such as cookies,
              gummies, soda or juice.
            </Typography>
            <Typography className={classes.handbookText}>
              <span className={classes.boldText}>
                INFANT FEEDING - FORMULA/BREAST MILK:
              </span>{" "}
              Please provide formula and bottles, labeled with your child’s
              name. All handling of breast milk will be done properly to ensure
              your infant is getting all of the nutrients gained by
              breast-feeding. If frozen breast milk is provided, it must be
              labeled with your child’s name and the date.
            </Typography>
            <Typography className={classes.handbookText}>
              <span className={classes.boldText}>
                SAFETY IDENTITY PROCEDURES:
              </span>{" "}
              In the event that a parent or guardian is unable to pick a child
              up from Peace of Mind Playschool, they will be asked for
              permission stating who will pick up their child. We will not
              release a child without proper identification. We will have a safe
              word for each child to be determined once the child is enrolled.
            </Typography>
            <Typography className={classes.handbookText}>
              <span className={classes.boldText}>TOILET TRAINING:</span> As
              children become interested in using the toilet and show signs of
              readiness, we will make a plan for consistency in potty training.
              Several changes of clothing and an extra pair of shoes should be
              left at Peace of Mind Playschool during this process. It is
              important that we communicate about starting potty training at a
              time that works for everyone and we are consistent with the plan.
            </Typography>
            <Typography className={classes.handbookText}>
              <span className={classes.boldText}>ITEMS FROM HOME:</span>{" "}
              Children can bring a special toy or blanket to sleep with during
              nap time, but it must stay at daycare and not go between
              home/daycare each day. Children may not bring toys from home.
              Infants may bring something that will provide comfort in the
              absence of their parent(s)/guardian(s), this must also stay at
              daycare. All comfort items will be washed at daycare at least once
              per week, or more frequently if needed.
            </Typography>
            <Typography className={classes.handbookText}>
              <span className={classes.boldText}>NAP/REST TIME:</span> Children
              are asked to rest following lunch. Nap/rest time lasts
              approximately two hours until most children begin waking on their
              own. Children who do not sleep may play quietly or read. If a
              pick-up is needed during nap/rest time, please inform me ahead of
              time so we can plan accordingly as it is disruptive to all the
              other children who are napping.
            </Typography>
            <Typography className={classes.handbookText}>
              <span className={classes.boldText}>
                IMMUNIZATIONS AND WELLNESS EXAM:
              </span>{" "}
              Children who attend Peace of Mind Playschool will need a copy of
              their immunization record and a well exam, (both signed by a
              physician) on file prior to enrollment. If your child isn’t fully
              immunized I need a signed form stating the reason. Contracts and
              health histories will be updated every year. Please make sure that
              with every new immunization we receive a copy of the updated
              record.
            </Typography>
            <Typography className={classes.handbookText}>
              <span className={classes.boldText}>PETS:</span> We have the joy of
              having two very lovable and well-behaved dogs. They are mixed-
              breed, well-trained, very tolerant and excellent with children.
              They are in the childcare space the entire day and love spending
              time with the children!
            </Typography>
            <Typography className={classes.handbookText}>
              <span className={classes.boldText}>PARKING:</span> Please park in
              a way to allow other parents access to come into and leave the
              driveway. Diagonal parking is suggested. PLEASE DO NOT LEAVE YOUR
              CHILD UNATTENDED IN THE DRIVEWAY! The driveway is a busy place and
              children should be accounted for at all times. If you have any
              problems with the parking, please notify me as soon as possible.
            </Typography>
            <Typography className={classes.handbookText}>
              <span className={classes.boldText}>MANDATED REPORTER:</span> In
              accordance with Vermont State Law, Peace of Mind Playschool must
              report suspicion of any form of child abuse or neglect. This
              includes sexual abuse, physical abuse or neglect. Peace of Mind
              Playschool does not condone, help hide or tolerate any type of
              abuse towards children. A daily health check of each child will be
              completed upon arrival.
            </Typography>
            <Typography className={classes.handbookText}>
              <span className={classes.boldText}>DISCIPLINE POLICY:</span>{" "}
              Children at Peace of Mind Playschool are reinforced for being
              responsible for their own behavior. We stress independence in
              solving problems and offer guidance in finding solutions. We
              encourage self-control and cooperation through positive discipline
              such as redirection, distraction and praise. In cases of continual
              disruption, the child may be removed from the situation for a
              short period of time to learn that acceptable behavior is
              encouraged. I am free at any time, to discuss any concerns you may
              have in this area.
            </Typography>
            <Typography className={classes.handbookText}>
              <span className={classes.boldText}>SMOKING POLICY:</span> Peace of
              Mind Playschool is a no smoking environment for the safety and
              well-being of children and adults. We do not permit smoking on the
              property.
            </Typography>
            <Typography className={classes.handbookText}>
              <span className={classes.boldText}>EMERGENCY PROCEDURES:</span> We
              have posted a written emergency plan for most types of
              emergencies. Families are encouraged to read the plan and ask
              questions if they have any. We keep food and supplies in the event
              that parents are not able to pick up their children and in the
              event of an emergency we will care for your children as if they
              are our own. If we determine that we need to relocate the
              children, we will follow the outline in the plan.
            </Typography>
            <Typography className={classes.handbookText}>
              <span className={classes.boldText}>DRINKING WATER TEST:</span>{" "}
              Results from the test for lead in the drinking water were
              conducted in 2018 and are approved and deemed safe by the Dept of
              Health.
            </Typography>
            <Typography className={classes.handbookText}>
              <span className={classes.boldText}>
                PARENT RESPONSIBILITIES/SUGGESTIONS:
              </span>{" "}
              Please provide the following items for your child by the first day
              of enrollment: __one set of extra clothing for the season (shirt,
              pants, underwear, socks, sweatshirt) __winter gear (boots,
              snowsuit, hat, mittens that fit) __diapers, wipes, diaper cream
              __Infants: pacifier to keep at day care (if used); sleep sack,
              formula/breast milk, baby food __Toddlers/Typographyreschoolers:
              crib sheet or thin sleeping bag and small travel pillow __nap
              items that you would leave here all the time __medicine: Tylenol,
              teething gel, etc. PLEASE LABEL ALL OF YOUR CHILD’S ITEMS WITH
              HIS/HER NAME OR INITIALS.
            </Typography>
            <Typography className={classes.handbookText}>
              Parents need to pay tuition fees on time. If a problem arises,
              please notify us immediately. We expect parents to be responsible
              for their children’s medical bill due to illness or injury.
            </Typography>
            <Typography className={classes.handbookText}>
              Please let us know of any lifestyle changes (parent going away,
              moving, death in the family, new pet or loss of pet) or any other
              changes in your child’s routine so that we may be sensitive to
              their needs.
            </Typography>
            <Typography className={classes.handbookText}>
              We cannot be in the middle of custody disputes, unless one parent
              has a court order, I have to release a child to either parent. I
              will need a copy of the custody order on file.
            </Typography>
            <Typography className={classes.handbookText}>
              You are welcome to visit any time to spend time with your child.
              Please notify me if you plan to visit during the day or pick up
              early. If you plan to visit or pick up during nap time, please
              make sure I am notified well in advance so we can make a plan to
              not disturb sleeping or resting children. Parents with concerns
              are encouraged to call anytime so that we can set up a conference
              to discuss concerns.
            </Typography>
            <Typography className={classes.handbookText}>
              <span className={classes.boldText}>OUR RESPONSIBILITIES:</span> We
              will strive to follow the standards represented in this handbook.
              We welcome any suggestions or questions. We will be open to
              discussing any concerns you have about the care your child is
              receiving.
            </Typography>
            <Typography className={classes.handbookText}>
              We will inform parents immediately in case of illness or accident.
            </Typography>
            <Typography className={classes.handbookText}>
              We will work with your family to create a relationship that
              supports the growth and development of your child.
            </Typography>
            <Typography className={classes.handbookText}>
              We provide: sunscreen, porta cribs, sleeping mats, sippy cups,
              breakfast with milk, lunch with milk, snacks, water, and a daily
              slip of your child’s schedule/activities.
            </Typography>
            <Typography className={classes.handbookText}>
              <span className={classes.boldText}>
                ILLNESS POLICY/AGREEMENT:
              </span>{" "}
              A child who has the following symptoms must be excluded from Peace
              of Mind Playschool until the symptoms disappear for 72 hours
              (without medication) or until instructed by a medical
              professional. All parents should realize that children get runny
              noses and common colds and will not get sent home. PLEASE NOTIFY
              US AS SOON AS POSSIBLE IF YOUR CHILD WILL NOT BE ATTENDING FOR THE
              DAY.
            </Typography>
            <Typography className={classes.handbookText}>
              <span className={classes.boldText}>
                WHEN TO KEEP YOUR CHILD HOME:
              </span>{" "}
              If your child needs constant one-on-one care or cannot participate
              in normal daily activities they should not attend for the day.
            </Typography>
            <Typography className={classes.handbookText}>
              <span className={classes.boldText}>
                CHILDREN WITH ANY SYMPTOMS OF COVID-19 MUST STAY HOME
              </span>
            </Typography>
            <ul className={classes.handbookText}>
              <li>
                Over-tired/Sleep deprived: a child who is extremely over tired
                and can't participate
              </li>
              <li>
                Diarrhea: 2 or more above normal for that child in 12 hours or
                is not contained
              </li>
              <li>
                Severe coughing: child turns red or blue in the face or produces
                whooping/croup noise
              </li>
              <li>
                Vomiting: 2 or more episodes in 24 hours or once and you child
                seems ill
              </li>
              <li>
                Fever: greater than 100.4 with infrared, contactless, forehead
                scan, or ear thrermometer
              </li>
              <li>
                Pink Eye: after cleared by doctor and/or doctor recommended
                treatment
              </li>
              <li>Rashes: any unidentified or contagious rash</li>
              <li>
                Mucus/runny nose that is not clear and requires constant
                attention and wiping
              </li>
              <li>
                Any time a child seems very sick and would require constant
                one-on-one care
              </li>
            </ul>
            <Typography className={classes.handbookText}>
              We ask that if your child becomes ill at Peace of Mind Playschool
              you should pick the child up as soon as possible and within 90
              minutes of being notified. We ask that you keep your child home
              until all symptoms are gone for 72 hours. Please notify us of any
              illness your child has.
            </Typography>
            <Typography className={classes.handbookText}>
              WE ASK THAT YOU DO NOT GIVE YOUR CHILD ANY MEDICATION (EXCEPT
              PRESCRIPTION) BEFORE DROPPING OFF. IN THE EVENT YOU GIVE YOUR
              CHILD FEVER REDUCING MEDICINE BEFORE DROPPING OFF YOU WILL BE
              ASKED TO PICK YOUR CHILD UP IMMEDIATELY. THIS EXPOSES EVERYONE TO
              ILLNESSES THAT ARE BEING MASKED. ATTENDANCE: Daily attendance will
              be taken and maintained by Peace of Mind Playschool. Children do
              not need to be signed in or out by their parent/guardian.
            </Typography>
            <Typography className={classes.handbookText}>
              <span className={classes.boldText}>
                ACCESS TO FAMILY CHILD CARE HOME REGULATIONS:
              </span>{" "}
              I keep a copy of the regulations on hand at all times. If you
              would like to review the regulations, please feel free to ask me
              for a copy. The regulations can also be found at:{" "}
              <a href="https://dcf.vermont.gov/sites/dcf/files/CDD/Docs/Licensing/FCCH_Final.pdf">
                https://dcf.vermont.gov/sites/dcf/files/CDD/Docs/Licensing/FCCH_Final.pdf
              </a>
              . The Child Development Division can be reached at: 800-649-2642
            </Typography>
            <Typography className={classes.handbookText}>
              <span className={classes.boldText}>CONFIDENTIALITY POLICY:</span>{" "}
              Your personal information, and that of your child/children kept on
              file at Peace of Mind Playschool is strictly confidential. It will
              not be shared with anybody other than the Child Development
              Division, upon their request.
            </Typography>
            <Typography className={classes.handbookText}>
              <span className={classes.boldText}>
                NON-DISCRIMINATION POLICY:
              </span>{" "}
              Peace of Mind Playschool shall not discriminate against children
              or their parents on the basis of race, color, religion (creed),
              gender, gender expression, age, national origin (ancestry),
              disability, marital status, sexual orientation, or military
              status, in any of its activities or operations. Respect for each
              child and their family and culture will be maintained at all
              times.
            </Typography>
            <Typography className={classes.handbookText}>
              <span className={classes.boldText}>FIELD TRIPS:</span> From time
              to time, Peace of Mind Playschool may arrange for a field trip or
              special outing. Written parent/guardian permission for each child
              will be required prior to each field trip or outing. If your child
              does not have written permission, they will be asked to stay home
              during the field trip or outing.
            </Typography>
            <Typography className={classes.handbookText}>
              <span className={classes.boldText}>
                CONTRACT AND STATEMENT OF UNDERSTANDING:
              </span>{" "}
              Please be sure you have received all pages of this handbook. Keep
              all policy pages for your reference and return the signed pages.
              This certifies the undersigned agrees to the policies stated in
              the handbook and below. Peace of Mind Playschool reserves the
              right to terminate this contract with 24 hours notice should it be
              determined that commitments and responsibilities are not being met
              by the parent or if the owner deems that for any reason that the
              continuation of care is not in the best interest of Peace of Mind
              Playschool.
            </Typography>
          </Grid>
        </Grid>
        <br />
        <br />
      </Container>
    </>
  );
};

export default Handbook;
